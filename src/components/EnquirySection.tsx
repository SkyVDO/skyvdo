"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { SECTION_IDS, EVENT_TYPES, CONTACT } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  eventType: string;
  description: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  eventType?: string;
  description?: string;
}

export default function EnquirySection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    eventType: "",
    description: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please describe your event";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Failed to send your enquiry. Please try again or reach out on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section id={SECTION_IDS.enquiry} className="py-20 md:py-24">
        <div className="mx-auto max-w-[var(--grid-narrow-width)] px-4 md:px-6">
          <div className="rounded-lg border border-[var(--border-subtle)] bg-deep-navy p-8 text-center md:p-12">
            <CheckCircle size={48} className="mx-auto mb-4 text-success" />
            <h2 className="text-display-md text-starlight mb-4">
              YOU&apos;RE ALL SET!
            </h2>
            <p className="text-body-lg text-moonstone mb-8">
              Thanks, {formData.name}! We&apos;ve got your details and will be
              in touch soon to plan your movie night.
            </p>
            <a
              href={`${CONTACT.whatsappLink}?text=${encodeURIComponent(
                `Hi! I just submitted an enquiry for a ${formData.eventType}. Looking forward to hearing from you!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 bg-success px-6 text-label text-midnight transition-all duration-[var(--duration-fast)] hover:bg-success/90 active:scale-[0.98]"
            >
              Follow up on WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={SECTION_IDS.enquiry} className="py-20 md:py-24">
      <div className="mx-auto max-w-[var(--grid-narrow-width)] px-4 md:px-6">
        <div className="rounded-lg border border-[var(--border-subtle)] bg-deep-navy p-6 md:p-8 lg:p-12">
          <h2 className="text-display-md text-starlight mb-2">
            LET&apos;S PLAN YOUR MOVIE NIGHT
          </h2>
          <p className="text-body-md text-moonstone mb-8">
            Tell us about your event and we&apos;ll make it happen.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-label text-moonstone mb-1 block"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`w-full border-b bg-transparent py-3 text-body-md text-starlight outline-none transition-colors duration-[var(--duration-fast)] placeholder:text-dusk ${
                  errors.name
                    ? "border-error"
                    : "border-[var(--border-default)] focus:border-amber-glow"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="mt-1 text-body-sm text-error">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="text-label text-moonstone mb-1 block"
              >
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`w-full border-b bg-transparent py-3 text-body-md text-starlight outline-none transition-colors duration-[var(--duration-fast)] placeholder:text-dusk ${
                  errors.phone
                    ? "border-error"
                    : "border-[var(--border-default)] focus:border-amber-glow"
                }`}
                placeholder="10-digit mobile number"
              />
              {errors.phone && (
                <p className="mt-1 text-body-sm text-error">{errors.phone}</p>
              )}
            </div>

            {/* Event Type */}
            <div>
              <label
                htmlFor="eventType"
                className="text-label text-moonstone mb-1 block"
              >
                Event Type
              </label>
              <select
                id="eventType"
                required
                value={formData.eventType}
                onChange={(e) => handleChange("eventType", e.target.value)}
                className={`w-full appearance-none border-b bg-transparent py-3 text-body-md outline-none transition-colors duration-[var(--duration-fast)] ${
                  formData.eventType ? "text-starlight" : "text-dusk"
                } ${
                  errors.eventType
                    ? "border-error"
                    : "border-[var(--border-default)] focus:border-amber-glow"
                }`}
              >
                <option value="" className="bg-deep-navy text-dusk">
                  Select event type
                </option>
                {EVENT_TYPES.map((type) => (
                  <option
                    key={type}
                    value={type}
                    className="bg-deep-navy text-starlight"
                  >
                    {type}
                  </option>
                ))}
              </select>
              {errors.eventType && (
                <p className="mt-1 text-body-sm text-error">
                  {errors.eventType}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="text-label text-moonstone mb-1 block"
              >
                Event Description
              </label>
              <textarea
                id="description"
                required
                rows={3}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className={`w-full resize-none border-b bg-transparent py-3 text-body-md text-starlight outline-none transition-colors duration-[var(--duration-fast)] placeholder:text-dusk ${
                  errors.description
                    ? "border-error"
                    : "border-[var(--border-default)] focus:border-amber-glow"
                }`}
                placeholder="Tell us about your event — date, location, number of guests..."
              />
              {errors.description && (
                <p className="mt-1 text-body-sm text-error">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="notes"
                className="text-label text-moonstone mb-1 block"
              >
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                rows={2}
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                className="w-full resize-none border-b border-[var(--border-default)] bg-transparent py-3 text-body-md text-starlight outline-none transition-colors duration-[var(--duration-fast)] focus:border-amber-glow placeholder:text-dusk"
                placeholder="Any specific requirements or questions?"
              />
            </div>

            {/* Submit error */}
            {submitError && (
              <p className="text-body-sm text-error">{submitError}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="group mt-4 inline-flex h-14 w-full items-center justify-center gap-2 bg-amber-glow text-label text-midnight transition-all duration-[var(--duration-fast)] hover:bg-sunset-orange active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Start Planning My Movie Night
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
