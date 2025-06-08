// Defines the standard keys for project details
export enum ProjectDetailLabelKey {
  CLIENT = "CLIENT",
  AGENCY = "AGENCY", // Added AGENCY
  ROLE = "ROLE",
  PLATFORM = "PLATFORM",
  TEAM_STRUCTURE = "TEAM_STRUCTURE",
  CONTRACT_DURATION = "CONTRACT_DURATION",
  // Add any other standard labels you might use here
}

// Maps the keys to their display-friendly string names
export const projectDetailLabelMap: Record<ProjectDetailLabelKey, string> = {
  [ProjectDetailLabelKey.CLIENT]: "Client",
  [ProjectDetailLabelKey.AGENCY]: "Agency", // Added Agency mapping
  [ProjectDetailLabelKey.ROLE]: "Role",
  [ProjectDetailLabelKey.PLATFORM]: "Platform",
  [ProjectDetailLabelKey.TEAM_STRUCTURE]: "Team structure",
  [ProjectDetailLabelKey.CONTRACT_DURATION]: "Contract duration",
}
