"use client";

import React, { useState } from "react";
import { Header } from "@/components/component/Header";

const eventsData = [
  {
    id: 1,
    title: "Conférence : L’Intelligence Artificielle au Service du Développement Industriel au Maroc",
    date: "14 novembre",
    location: "Amphithéâtre Blue",
    speakers: [
      {
        name: "Pr. Jaouad Dabounou",
        topic: "Empowering Morocco's Industrial Future: Mastering AI from Fundamentals to Success",
      },
      {
        name: "M. Said Wahid",
        topic: "AI and Microsoft: Leveraging Microsoft Copilot",
      },
    ],
    summary:
      "Une conférence sur l’intelligence artificielle et son rôle dans le développement industriel au Maroc.",
    details: `
      Cet événement a exploré comment l’IA peut transformer l’industrie marocaine grâce à des interventions de haut niveau. 
      Pr. Jaouad Dabounou a insisté sur l'importance de la formation en IA, tandis que M. Said Wahid a présenté les solutions Microsoft Copilot.
      Un débat interactif a suivi, ouvrant des perspectives prometteuses pour les jeunes ingénieurs et entrepreneurs marocains.
    `,
    video: "/pictures/video.mp4", 
  },
];

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Header /> 

      <div className="p-10 mt-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          📅 Événements IT Club
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
            >
              <button
                className="w-full text-left text-xl font-semibold text-gray-800 hover:text-blue-600 transition"
                onClick={() =>
                  setActiveEvent(activeEvent === event.id ? null : event.id)
                }
              >
                {event.title}
              </button>

              {activeEvent === event.id && (
                <div className="mt-3 space-y-2 transition-opacity animate-fadeIn">
                  <p className="text-gray-600">
                    <strong>Date :</strong> {event.date}
                  </p>
                  <p className="text-gray-600">
                    <strong>Lieu :</strong> {event.location}
                  </p>

                  <h3 className="font-semibold mt-2 text-gray-700">
                    🎤 Intervenants :
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {event.speakers.map((speaker, index) => (
                      <li key={index}>
                        <strong>{speaker.name} :</strong> {speaker.topic}
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-700 mt-2">{event.details}</p>

                  {event.video && (
                    <div className="mt-4 bg-background p-6 rounded-lg shadow-md">
                      <iframe
                        className="w-full h-[calc(100vh-300px)] rounded-lg shadow-md"
                        src={event.video}
                        title="Vidéo de l'événement"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
