
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<typeof formState> = {};
    
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success simulation
      setSubmitStatus('success');
      // Reset form
      setFormState({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card w-full max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
      
      <div className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`contact-input ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Enter your name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.name}
            </p>
          )}
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`contact-input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.email}
            </p>
          )}
        </div>
        
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={5}
            className={`contact-input resize-none ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Type your message here..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.message}
            </p>
          )}
        </div>
        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md font-medium flex items-center justify-center transition-all duration-300 ${
              isSubmitting 
                ? 'bg-secondary/50 cursor-not-allowed' 
                : 'bg-accent hover:bg-accent/80'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </button>
          
          {/* Success message */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Your message has been sent successfully!</span>
            </div>
          )}
          
          {/* Error message */}
          {submitStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md flex items-center text-red-400">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>There was an error sending your message. Please try again.</span>
            </div>
          )}
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;
