import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import AddProjectForm from '../components/AddProjectForm';
import { PROJECTS as INITIAL_PROJECTS } from '../constants';
import { db, collection, onSnapshot, query, orderBy, auth, onAuthStateChanged, User, deleteDoc, doc } from '../firebase';

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, orderBy('createdAt', 'desc'));
    
    const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // If Firestore is empty, use initial projects as fallback
      if (projectsData.length === 0) {
        setProjects(INITIAL_PROJECTS);
      } else {
        setProjects(projectsData);
      }
    }, (error) => {
      console.error("Error fetching projects: ", error);
      // Fallback to initial projects on error
      setProjects(INITIAL_PROJECTS);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot();
    };
  }, []);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = async (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      await deleteDoc(doc(db, 'projects', projectId));
    } catch (error) {
      console.error("Error deleting project: ", error);
      alert("Failed to delete project.");
    }
  };

  return (
    <main className="pt-32 pb-24">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">Case Studies</span>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-6">Engineering Portfolio</h1>
            <p className="text-xl text-brand-600 max-w-2xl leading-relaxed">
              A selection of structural design and site engineering projects demonstrating technical precision and problem-solving.
            </p>
          </div>
          
          {user && (
            <button
              onClick={() => setIsAddFormOpen(true)}
              className="bg-brand-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10 active:scale-95 shrink-0"
            >
              <Plus className="w-5 h-5" />
              Add New Project
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => handleProjectClick(project)}
              onDelete={(e) => handleDeleteProject(e, project.id)}
            />
          ))}
          
          {/* Placeholder for more projects */}
          {projects.length < 3 && (
            <div className="bg-brand-50 border border-dashed border-brand-200 rounded-xl flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="text-2xl font-bold text-brand-300">+</span>
              </div>
              <h3 className="text-lg font-bold text-brand-400 mb-2">More Projects Coming Soon</h3>
              <p className="text-sm text-brand-400 max-w-[200px]">Currently documenting recent structural retrofitting works.</p>
            </div>
          )}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />

      <AddProjectForm
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
      />
    </main>
  );
}
