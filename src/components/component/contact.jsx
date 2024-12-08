"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  GitlabIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./Icons";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export function Contact() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    loadContacts();
  }, []);

  // Load contacts from API with error handling
  const loadContacts = async () => {
    try {
      const result = await axios.get("http://206.81.22.239:8000/api2");
      setContact(result.data);
    } catch (error) {
      console.error("Error loading contacts:", error);
      setMessage("Failed to load contacts.");
    }
  };

  // Add new contact with error handling
  const addContact = async (newContact) => {
    try {
      const result = await axios.post(
        "http://206.81.22.239:8000/api2",
        newContact
      );
      setContact((prevState) => [...prevState, result.data]);
      return result; // Return result for further handling
    } catch (error) {
      console.error("Error adding contact:", error);
      throw new Error("Failed to add new contact.");
    }
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await addContact(formData);
      if (response.status === 200) {
        setMessage("Registration successful!");
        resetForm();
      } else {
        setMessage("Failed to register. Please try again.");
      }
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reset form and optionally close floating section
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div id="Contact">
      {
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or want to get involved with the AIAC IT Club?
                  Fill out the form below or use the contact information to
                  reach out.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Form</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {["name", "email", "message"].map((field) => (
                    <div key={field}>
                      <label className="block text-left text-sm font-medium text-rose-50">
                        {field
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </label>
                      {field === "message" ? (
                        <textarea
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          placeholder={`Enter your ${field}`}
                          required
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                        />
                      ) : (
                        <Input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          placeholder={`Enter your ${field}`}
                          required
                        />
                      )}
                    </div>
                  ))}
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Info</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-10 w-10 text-muted-foreground" />
                    <p>
                      AIAC, Technopole de l’Aéroport Mohammed V, Nouasser,
                      Casablanca, Maroc
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p>0611286753</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                    <p>it.club@aiac.ma</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Social Media</h3>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/aiacit/"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <InstagramIcon className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/aimac-it-club/"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://gitlab.com/aiacit"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <GitlabIcon className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      }{" "}
    </div>
  );
}
