export function isMaintenanceMode() {
  return process.env.MAINTENANCE_MODE?.trim().toLowerCase() === "true";
}
