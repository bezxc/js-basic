const hasLicense = true;
const age = 18;
const isDrunk = false;

const canDrive = hasLicense && age > 17 && !isDrunk ? "Может" : "Не может";
