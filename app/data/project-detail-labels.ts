// Defines the standard keys for project details
export enum ProjectDetailLabelKey {
  CLIENT = "CLIENT",
  AGENCY = "AGENCY",
  ROLE = "ROLE",
  PLATFORM = "PLATFORM",
  // TEAM_STRUCTURE = "TEAM_STRUCTURE", // Removed
  CONTRACT_DURATION = "CONTRACT_DURATION",
  // Add any other standard labels you might use here
}

// Maps the keys to their display-friendly string names
export const projectDetailLabelMap: Record<ProjectDetailLabelKey, string> = {
  [ProjectDetailLabelKey.CLIENT]: "Client",
  [ProjectDetailLabelKey.AGENCY]: "Agency",
  [ProjectDetailLabelKey.ROLE]: "Role",
  [ProjectDetailLabelKey.PLATFORM]: "Platform",
  // [ProjectDetailLabelKey.TEAM_STRUCTURE]: "Team structure", // Removed
  [ProjectDetailLabelKey.CONTRACT_DURATION]: "Time on contract",
}
