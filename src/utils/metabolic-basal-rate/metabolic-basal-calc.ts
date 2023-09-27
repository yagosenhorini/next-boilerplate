export default function metabolicBasalRate(
  weight: number,
  height: number,
  age: number,
  gender: string,
  activityLevel?: string
) {
  switch (gender) {
    case 'male':
      switch (activityLevel) {
        case 'sedentary':
          return (
            1.2 *
            (66 + 13.7 * weight + 5 * height - 6.8 * age)
          ).toFixed();
        case 'high':
          return (
            1.725 *
            (66 + 13.7 * weight + 5 * height - 6.8 * age)
          ).toFixed();
        default:
          return (
            88.362 +
            13.397 * weight +
            4.799 * height -
            5.677 * age
          ).toFixed(0);
      }
    case 'female':
      switch (activityLevel) {
        case 'sedentary':
          return (
            1.2 *
            (655 + 9.6 * weight + 1.8 * height - 4.7 * age)
          ).toFixed();
        default:
          return (
            447.593 +
            9.247 * weight +
            3.098 * height -
            4.33 * age
          ).toFixed(0);
      }
  }
}
