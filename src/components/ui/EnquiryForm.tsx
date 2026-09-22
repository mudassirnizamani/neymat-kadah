import React, { useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';

interface Field {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date' | 'number';
  placeholder?: string;
  required?: boolean;
  options?: string[];
  colSpan?: boolean;
}

interface EnquiryFormProps {
  fields: Field[];
  submitText?: string;
  onSuccessMessage: string;
  whatsappMessagePrefix: string;
}

export const EnquiryForm = ({
  fields,
  submitText = 'Send Enquiry',
  onSuccessMessage,
  whatsappMessagePrefix
}: EnquiryFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  // Generate WhatsApp message from form data
  const generateWhatsAppMessage = () => {
    let message = `${whatsappMessagePrefix}\n\n`;
    fields.forEach(field => {
      if (formData[field.name]) {
        message += `${field.label}: ${formData[field.name]}\n`;
      }
    });
    return message;
  };

  if (isSuccess) {
    return (
      <div className="bg-nk-surface border border-nk-border rounded-lg p-8 text-center max-w-lg mx-auto shadow-sm">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-xl font-serif font-medium text-nk-text-primary mb-2">Enquiry Received</h3>
        <p className="text-nk-text-secondary mb-6">{onSuccessMessage}</p>

        <div className="pt-6 border-t border-nk-border">
          <p className="text-sm text-nk-text-secondary mb-4">Want a faster response?</p>
          <WhatsAppButton
            message={generateWhatsAppMessage()}
            text="Continue on WhatsApp"
            fullWidth
          />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-nk-surface border border-nk-border rounded-lg p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name} className={field.colSpan || field.type === 'textarea' ? 'md:col-span-2' : ''}>
            <label htmlFor={field.name} className="block text-sm font-medium text-nk-text-primary mb-2">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-nk-border rounded-md focus:outline-none focus:ring-2 focus:ring-nk-accent/20 focus:border-nk-accent bg-nk-bg/50 transition-colors"
              ></textarea>
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-nk-border rounded-md focus:outline-none focus:ring-2 focus:ring-nk-accent/20 focus:border-nk-accent bg-nk-bg/50 transition-colors appearance-none"
              >
                <option value="">{field.placeholder || 'Select an option'}</option>
                {field.options?.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type || 'text'}
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-nk-border rounded-md focus:outline-none focus:ring-2 focus:ring-nk-accent/20 focus:border-nk-accent bg-nk-bg/50 transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-3 bg-nk-text-primary text-nk-surface rounded-md font-medium hover:bg-nk-text-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : submitText}
        </button>
      </div>
    </form>
  );
};
