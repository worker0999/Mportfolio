import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Edit3, Eye } from 'lucide-react';

interface BiodataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BiodataModal({ isOpen, onClose }: BiodataModalProps) {
  // Configurable fields state populated with Mohammad Ashiq's data
  const [fields, setFields] = useState({
    name: 'Mohammad Ashiq',
    age: '26 Years',
    height: "5.5 ft",
    diet: 'Halal / Customary',
    religion: 'Islam',
    languages: 'Tamil, English, Hindi, Urdu, Kannada, Arabic',
    degree: 'Bachelor of Engineering (B.E.)',
    undergrad: 'Environmental Engineering',
    occupation: 'HSE Engineer',
    employer: 'Working in KSA (Kingdom of Saudi Arabia)',
    income: 'Respectable, details on request',
    location: 'Kingdom of Saudi Arabia (KSA)',
    father: 'Retired Businessman',
    mother: 'Home Maker',
    siblings: '1 Younger',
    settled: 'Bangalore, Karnataka, India',
    expectations: 'I seek a practicing Muslimah who values faith, kindness, family relationships, and personal growth. More than perfection, I value sincerity, good character, and a willingness to build a life together through mutual understanding and support.',
  });

  const [activeTab, setActiveTab] = useState<'preview' | 'edit'>('preview');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="biodata-overlay no-print">
        {/* Backdrop close handler */}
        <div 
          className="absolute inset-0" 
          onClick={onClose}
          style={{ cursor: 'pointer' }}
        />

        {/* Modal Window */}
        <motion.div
          className="biodata-modal no-print"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        >
          {/* Header */}
          <div className="biodata-header">
            <h3>Matrimonial Biodata Generator</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Tab toggles */}
              <div className="biodata-tabs">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={activeTab === 'preview' ? 'active' : ''}
                >
                  <Eye size={14} /> Preview
                </button>
                <button
                  onClick={() => setActiveTab('edit')}
                  className={activeTab === 'edit' ? 'active' : ''}
                >
                  <Edit3 size={14} /> Edit Fields
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                style={{ background: 'transparent', border: 'none', color: 'var(--cream)', cursor: 'pointer', opacity: 0.7 }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="biodata-body">
            {activeTab === 'edit' ? (
              /* Live Editor Form */
              <div className="biodata-form-grid">
                
                <div className="biodata-field full">
                  <h4 className="biodata-section-title">Personal Details</h4>
                </div>
                
                <div className="biodata-field">
                  <label>Full Name</label>
                  <input type="text" name="name" value={fields.name} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Age</label>
                  <input type="text" name="age" value={fields.age} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Height</label>
                  <input type="text" name="height" value={fields.height} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Diet</label>
                  <input type="text" name="diet" value={fields.diet} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Religion</label>
                  <input type="text" name="religion" value={fields.religion} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Languages Known</label>
                  <input type="text" name="languages" value={fields.languages} onChange={handleChange} />
                </div>

                <div className="biodata-field full">
                  <h4 className="biodata-section-title">Education & Career</h4>
                </div>
                
                <div className="biodata-field">
                  <label>Degree</label>
                  <input type="text" name="degree" value={fields.degree} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Specialization</label>
                  <input type="text" name="undergrad" value={fields.undergrad} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Current Role</label>
                  <input type="text" name="occupation" value={fields.occupation} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Employer Name</label>
                  <input type="text" name="employer" value={fields.employer} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Annual Income</label>
                  <input type="text" name="income" value={fields.income} onChange={handleChange} />
                </div>
                <div className="biodata-field">
                  <label>Work Location</label>
                  <input type="text" name="location" value={fields.location} onChange={handleChange} />
                </div>

                <div className="biodata-field full">
                  <h4 className="biodata-section-title">Family Details</h4>
                </div>
                
                <div className="biodata-field full">
                  <label>Father's Occupation</label>
                  <input type="text" name="father" value={fields.father} onChange={handleChange} />
                </div>
                <div className="biodata-field full">
                  <label>Mother's Occupation</label>
                  <input type="text" name="mother" value={fields.mother} onChange={handleChange} />
                </div>
                <div className="biodata-field full">
                  <label>Siblings Details</label>
                  <input type="text" name="siblings" value={fields.siblings} onChange={handleChange} />
                </div>
                <div className="biodata-field full">
                  <label>Family Roots / Settled Place</label>
                  <input type="text" name="settled" value={fields.settled} onChange={handleChange} />
                </div>

                <div className="biodata-field full">
                  <h4 className="biodata-section-title">Partner Expectations</h4>
                </div>
                <div className="biodata-field full">
                  <label>Expectations Note</label>
                  <textarea
                    name="expectations"
                    rows={4}
                    value={fields.expectations}
                    onChange={handleChange}
                    style={{ resize: 'none' }}
                  />
                </div>
              </div>
            ) : (
              /* A4 Paper styled live view */
              <div className="biodata-preview-wrapper">
                <div className="biodata-preview-sheet">
                  <h2>Matrimonial Biodata</h2>

                  {/* Personal details */}
                  <h4 className="biodata-preview-section">Personal Details</h4>
                  <div className="biodata-preview-grid">
                    <div><strong>Name:</strong> {fields.name}</div>
                    <div><strong>Age:</strong> {fields.age}</div>
                    <div><strong>Height:</strong> {fields.height}</div>
                    <div><strong>Dietary:</strong> {fields.diet}</div>
                    <div><strong>Religion:</strong> {fields.religion}</div>
                    <div><strong>Languages:</strong> {fields.languages}</div>
                  </div>

                  {/* Career details */}
                  <h4 className="biodata-preview-section">Education & Professional</h4>
                  <div className="biodata-preview-grid">
                    <div><strong>Degree:</strong> {fields.degree}</div>
                    <div><strong>Spec.:</strong> {fields.undergrad}</div>
                    <div><strong>Role:</strong> {fields.occupation}</div>
                    <div><strong>Employer:</strong> {fields.employer}</div>
                    <div><strong>Income:</strong> {fields.income}</div>
                    <div><strong>Location:</strong> {fields.location}</div>
                  </div>

                  {/* Family details */}
                  <h4 className="biodata-preview-section">Family Information</h4>
                  <div className="biodata-preview-grid" style={{ gridTemplateColumns: '1fr' }}>
                    <div><strong>Father:</strong> {fields.father}</div>
                    <div><strong>Mother:</strong> {fields.mother}</div>
                    <div><strong>Siblings:</strong> {fields.siblings}</div>
                    <div><strong>Roots/Settled:</strong> {fields.settled}</div>
                  </div>

                  {/* Expectations */}
                  <h4 className="biodata-preview-section">Partner Preferences</h4>
                  <p className="biodata-preview-text">
                    {fields.expectations}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="biodata-footer">
            <button onClick={onClose} className="biodata-btn-cancel">
              Cancel
            </button>
            <button onClick={handlePrint} className="biodata-btn-print">
              <Printer size={16} /> Print / Save as PDF
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* REAL PRINT SHEET (Hidden on screen, only visible when printing) */}
      <div className="print-only biodata-preview-sheet">
        <h2>Matrimonial Biodata</h2>

        <h4 className="biodata-preview-section">Personal Details</h4>
        <div className="biodata-preview-grid">
          <div><strong>Name:</strong> {fields.name}</div>
          <div><strong>Age:</strong> {fields.age}</div>
          <div><strong>Height:</strong> {fields.height}</div>
          <div><strong>Dietary:</strong> {fields.diet}</div>
          <div><strong>Religion:</strong> {fields.religion}</div>
          <div><strong>Languages:</strong> {fields.languages}</div>
        </div>

        <h4 className="biodata-preview-section">Education & Professional</h4>
        <div className="biodata-preview-grid">
          <div><strong>Degree:</strong> {fields.degree}</div>
          <div><strong>Specialization:</strong> {fields.undergrad}</div>
          <div><strong>Occupation:</strong> {fields.occupation}</div>
          <div><strong>Employer:</strong> {fields.employer}</div>
          <div><strong>Income:</strong> {fields.income}</div>
          <div><strong>Location:</strong> {fields.location}</div>
        </div>

        <h4 className="biodata-preview-section">Family Information</h4>
        <div className="biodata-preview-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div><strong>Father:</strong> {fields.father}</div>
          <div><strong>Mother:</strong> {fields.mother}</div>
          <div><strong>Siblings:</strong> {fields.siblings}</div>
          <div><strong>Roots/Settled:</strong> {fields.settled}</div>
        </div>

        <h4 className="biodata-preview-section">Partner Preferences</h4>
        <p className="biodata-preview-text">
          {fields.expectations}
        </p>
      </div>
    </AnimatePresence>
  );
}
