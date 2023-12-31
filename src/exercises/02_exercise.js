/**
 * Tri par sélection
 *
 * Dans cet exercice, vous devez implémenter l'algorithme de tri par sélection.
 * Il fonctionne en répétitivement sélectionnant le minimum d'une partie du tableau et en le plaçant au bon endroit.
 *
 * Pseudo-code :
  
  procédure tri_selection(tableau t)
      n ← longueur(t) 
      pour i de 0 à n - 2
          min ← i       
          pour j de i + 1 à n - 1
              si t[j] < t[min], alors min ← j
          fin pour
          si min ≠ i, alors échanger t[i] et t[min]
      fin pour
  fin procédure

 *
 * @param {number[]} arr - Le tableau à trier
 * @returns {number[]} - Le tableau trié
 */

export default function selectSort(arr) {
  // Votre code ici
}
