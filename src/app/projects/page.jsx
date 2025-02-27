"use client";

import React, { useState } from "react";
import { FaTimes, FaDatabase, FaRobot, FaShieldAlt, FaTree, FaGamepad } from "react-icons/fa";
import { Header } from "@/components/component/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projectsData = [
  {
    name: "Neural Network & CNNs",
    leader: "Team AI Research",
    mentor: "RAGHIBI Fayçal",
    details: <b>"Développement et entraînement de réseaux neuronaux convolutionnels pour l'analyse d'images médicales et industrielles."</b>,
    steps: [
      "Collecte et préparation des données",
      "Conception et entraînement du modèle",
      "Optimisation et validation",
      "Déploiement et tests"
    ],
    tools: ["Python", "TensorFlow", "Keras", "OpenCV"],
    image: "/pictures/neurons.png",
    logo: <FaRobot size={50} className="text-blue-300" />
  },
  {
    name: "Lab : Vulnérabilité SQL Injection",
    leader: "Team CyberSecurity",
    mentor: "BERNICHI Fatima Zahra",
    details: <b>"Découverte, exploitation et correction d'une vulnérabilité SQL Injection dans un environnement sécurisé."</b>,
    steps: [
      "Installation de DVWA",
      "Configuration de la base de données",
      "Tests d'injection SQL",
      "Implémentation des correctifs"
    ],
    tools: ["SQLMap", "MySQL", "DVWA", "Burp Suite"],
    image: "/pictures/sql.png",
    logo: <FaShieldAlt size={50} className="text-blue-500" />
  },
  {
    name: "Robot d'exploration et détection de plantes",
    leader: "Team Robotics & AI",
    details: <b>"Ce robot est conçu pour éviter les obstacles sur Mars et détecter et enregistrer l'emplacement d'une plante, quel que soit son type."</b>,
    steps: [
      "Installation des dépendances requises",
      "Configuration de YOLOv5s",
      "Augmentation du seuil de confiance",
      "Test et déploiement du module"
    ],
    tools: ["Python", "YOLOv5s", "OpenCV", "Torch", "Matplotlib", "NumPy"],
    image: "/pictures/pp.jpg",
    logo: <FaTree size={50} className="text-purple-500" />
  },
  {
    name: "Jeu Développé avec Godot",
    leader: "Team Game Development",
    mentor: "Inconnu",
    details: <b>"Un jeu développé avec le moteur Godot en GDScript/C#, mettant en avant des mécaniques innovantes et une expérience immersive."</b>,
    steps: [
      "Conception du gameplay",
      "Développement du moteur de jeu",
      "Ajout des assets graphiques et sonores",
      "Tests et optimisations"
    ],
    tools: ["Godot", "GDScript", "C#", "Blender", "Aseprite"],
    media: [
      "/pictures/1.jpg",
      "/pictures/2.jpg",
      "/pictures/3.jpg",
      "/pictures/4.mp4"
    ],
    logo: <FaGamepad size={50} className="text-purple-700" />
  },
  
{
  name: "To-Do List (GitHub Learning)",
  leader: "Team Web Development",
  mentor: "GitHub Community",
  details:<b> "Un projet simple de To-Do List pour aider les membres à apprendre les bases de GitHub, y compris le clonage, le pull et le push de repositories."</b>,
  steps: [
    "Création du repository sur GitHub",
    "Clonage du repository en local",
    "Développement de la To-Do List en HTML/CSS",
    "Utilisation des commandes Git pour gérer les versions"
  ],
  tools: ["HTML", "CSS", "Git", "GitHub"],
  image: "/pictures/5.png",
  logo: <FaDatabase size={50} className="text-pink-600" />
}
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      <Header />
      <div className="p-6 mt-12">
        <h2 className="text-4xl font-bold text-center mb-6">📅 Mini Projects</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-md border border-gray-300 cursor-pointer hover:shadow-lg transition-transform transform hover:scale-[1.02] flex items-center gap-3"
              onClick={() => setSelectedProject(project)}
            >
              {project.logo}
              <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto p-3">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-lg p-5 max-w-sm w-full relative"
          >
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setSelectedProject(null)}>
              <FaTimes size={18} />
            </button>
            <div className="flex justify-center mb-3">
              {selectedProject.logo}
            </div>
            <h2 className="text-lg font-bold text-gray-900 text-center mb-2">{selectedProject.name}</h2>
            {selectedProject.media ? (
              <Carousel showThumbs={false} infiniteLoop autoPlay>
                {selectedProject.media.map((item, index) => (
                  item.endsWith(".mp4") ? (
                    <video key={index} controls className="w-full h-auto rounded-lg shadow">
                      <source src={item} type="video/mp4" />
                    </video>
                  ) : (
                    <Image key={index} src={item} width={300} height={200} alt={`media-${index}`} className="rounded-lg mx-auto shadow" />
                  )
                ))}
              </Carousel>
            ) : (
              <Image src={selectedProject.image} width={300} height={200} alt={selectedProject.name} className="rounded-lg mx-auto shadow" />
            )}
            <p className="text-gray-800 text-xs mt-2 text-center">{selectedProject.details}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
