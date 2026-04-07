import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Image as ImageIcon, Layout, Save, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { db, collection, addDoc, auth } from '../firebase';
import { serverTimestamp } from 'firebase/firestore';

interface AddProjectFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProjectForm: React.FC<AddProjectFormProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    problem: '',
    solution: '',
    result: '',
    image: '',
    details: '',
    location: '',
    date: '',
    tools: '',
    additionalImages: '',
    design: 'classic' as 'classic' | 'modern' | 'gallery'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("You must be logged in to add a project.");
      return;
    }

    setIsSubmitting(true);
    try {
      const newProject = {
        ...formData,
        tools: formData.tools.split(',').map(t => t.trim()).filter(t => t),
        additionalImages: formData.additionalImages.split(',').map(t => t.trim()).filter(t => t),
        authorUid: auth.currentUser.uid,
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'projects'), newProject);
      
      onClose();
      setFormData({
        title: '',
        type: '',
        problem: '',
        solution: '',
        result: '',
        image: '',
        details: '',
        location: '',
        date: '',
        tools: '',
        additionalImages: '',
        design: 'classic'
      });
    } catch (error) {
      console.error("Error adding project: ", error);
      alert("Failed to save project. Please check console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const designs = [
    { id: 'classic', name: 'Classic', desc: 'Balanced 2-column layout' },
    { id: 'modern', name: 'Modern', desc: 'Wide content with sidebar' },
    { id: 'gallery', name: 'Gallery', desc: 'Focus on project images' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-900/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-brand-100 flex items-center justify-between bg-brand-50">
              <h2 className="text-xl font-bold text-brand-900 flex items-center gap-2">
                <Plus className="w-5 h-5 text-brand-500" />
                Add New Project
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-brand-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-brand-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="overflow-y-auto flex-grow p-8 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Info */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Project Title</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      value={formData.title}
                      onChange={e => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Al-Balad Restoration"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Type</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        value={formData.type}
                        onChange={e => setFormData({ ...formData, type: e.target.value })}
                        placeholder="e.g. Restoration"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Location</label>
                      <input
                        type="text"
                        className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Jeddah"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Main Image URL</label>
                    <div className="relative">
                      <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" />
                      <input
                        required
                        type="url"
                        className="w-full bg-brand-50 border border-brand-100 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        value={formData.image}
                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Tools (comma separated)</label>
                    <input
                      type="text"
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      value={formData.tools}
                      onChange={e => setFormData({ ...formData, tools: e.target.value })}
                      placeholder="ETABS, SAP2000, AutoCAD"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Timeline / Date</label>
                    <input
                      type="text"
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      placeholder="e.g. Aug 2025 - Present"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">The Challenge</label>
                    <textarea
                      required
                      rows={3}
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none"
                      value={formData.problem}
                      onChange={e => setFormData({ ...formData, problem: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">The Solution</label>
                    <textarea
                      required
                      rows={3}
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none"
                      value={formData.solution}
                      onChange={e => setFormData({ ...formData, solution: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Key Result</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      value={formData.result}
                      onChange={e => setFormData({ ...formData, result: e.target.value })}
                      placeholder="e.g. 15% reduction in concrete"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Gallery Images (comma separated URLs)</label>
                    <textarea
                      rows={2}
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none"
                      value={formData.additionalImages}
                      onChange={e => setFormData({ ...formData, additionalImages: e.target.value })}
                      placeholder="https://image1.jpg, https://image2.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Full Project Details</label>
                <textarea
                  rows={4}
                  className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none"
                  value={formData.details}
                  onChange={e => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe the project in detail..."
                />
              </div>

              {/* Design Choice */}
              <div className="mt-12">
                <label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Layout className="w-4 h-4" />
                  Choose Detail Page Design
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {designs.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, design: d.id as any })}
                      className={cn(
                        "p-6 rounded-2xl border-2 text-left transition-all",
                        formData.design === d.id 
                          ? "border-brand-900 bg-brand-900 text-white shadow-lg" 
                          : "border-brand-100 bg-white text-brand-900 hover:border-brand-200"
                      )}
                    >
                      <p className="font-bold mb-1">{d.name}</p>
                      <p className={cn("text-xs", formData.design === d.id ? "text-brand-300" : "text-brand-500")}>
                        {d.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl font-bold text-brand-500 hover:bg-brand-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-900 text-white px-10 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Save Project
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddProjectForm;
