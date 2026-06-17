const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const button = document.querySelector(".card__mid-arrow");
const resultYears = document.querySelector(
  ".card__time-value:nth-child(1) .accent",
);
const resultMonths = document.querySelector(
  ".card__time-value:nth-child(2) .accent",
);
const resultDays = document.querySelector(
  ".card__time-value:nth-child(3) .accent",
);

/**
 * Calcule l'âge en comparant la date de naissance saisie avec la date actuelle.
 */
function calculateAge() {
  // 1. Vérification de sécurité : s'assurer que l'utilisateur a rempli tous les champs
  if (!day.value || !month.value || !year.value) {
    alert("Please fill in all fields");
    return;
  }

  // Conversion des chaînes de caractères (string) en nombres (number) comme sur pyhton dasn les functionsd
  const d = Number(day.value);
  const m = Number(month.value);
  const y = Number(year.value);

  // Création de l'objet Date de naissance.
  // Note : les mois commencent à 0 en JS (Janvier = 0, Avril = 3), donc on m - 1.
  const birthDate = new Date(y, m - 1, d);

  /*
   * 2. Validation de la date :
   * Si on donne "31 Avril" à l'objet Date, JS le convertit automatiquement en "1er Mai".
   * On compare donc la date obtenue avec les valeurs saisies pour voir s'il y a eu un décalage.
   */
  if (
    birthDate.getFullYear() !== y ||
    birthDate.getMonth() !== m - 1 ||
    birthDate.getDate() !== d
  ) {
    alert("Must be a valid date"); // Cas du 31/04 ou 30/02 par exemple
    return;
  }

  const currentDate = new Date();

  // 3. Vérification : la date de naissance ne peut pas être dans le futur
  if (birthDate > currentDate) {
    alert("Must be in the past");
    return;
  }

  // 4. Calcul de la différence
  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  // Si les jours sont négatifs, on recule d'un mois et on ajoute les jours du mois précédent
  if (ageDays < 0) {
    ageMonths--;
    /*
     * Astuce : new Date(année, mois, 0).getDate() donne le dernier jour du mois précédent.
     * Cela permet de gérer correctement les mois de 28, 30 ou 31 jours.
     */
    ageDays += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate();
  }

  // Si les mois sont négatifs, on recule d'une année et on ajoute 12 mois
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // 5. Mise à jour de l'interface utilisateur
  resultYears.textContent = ageYears;
  resultMonths.textContent = ageMonths;
  resultDays.textContent = ageDays;
}

// Déclenchement du calcul lors du clic sur le bouton (cercle violet)
button.addEventListener("click", calculateAge);
