/** What a contact-form message is about. `?topic=<value>` preselects one. */
export const contactTopics = [
  { value: "home-cleaning", label: "Home cleaning" },
  { value: "car-detailing", label: "Car detailing" },
  { value: "custodian", label: "Custodian services" },
  { value: "gift-card", label: "Gift card" },
  { value: "other", label: "Something else" },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["value"];

export function topicLabel(value: string) {
  return contactTopics.find((topic) => topic.value === value)?.label;
}
