import metabolicBasalRate from './metabolic-basal-calc';

describe('Metabolic basal rate', () => {
  const measures = {
    men: {
      weight: 83.5,
      height: 173,
      age: 30,
      gender: 'male',
      activityLevel: 'high',
    },
    women: {
      weight: 108,
      height: 162.5,
      age: 25,
      gender: 'female',
      activityLevel: 'sedentary',
    },
  };

  it('should calculate men metabolic basal rate', () => {
    const { men } = measures;
    expect(
      metabolicBasalRate(men.weight, men.height, men.age, men.gender)
    ).toBe('1867');
  });

  it('should calculate women metabolic basal rate', () => {
    const { women } = measures;
    expect(
      metabolicBasalRate(women.weight, women.height, women.age, women.gender)
    ).toBe('1841');
  });

  it('should calculate metabolic basal rate to sedentary women', () => {
    const { women } = measures;
    expect(
      metabolicBasalRate(
        women.weight,
        women.height,
        women.age,
        women.gender,
        women.activityLevel
      )
    ).toBe('2240');
  });

  it('should calculate metabolic basal rate to high activity level men', () => {
    const { men } = measures;
    expect(
      metabolicBasalRate(
        men.weight,
        men.height,
        men.age,
        men.gender,
        men.activityLevel
      )
    ).toBe('3227');
  });

  it('should calculate metabolic basal rate to sedentary men', () => {
    const { men } = measures;
    expect(
      metabolicBasalRate(
        men.weight,
        men.height,
        men.age,
        men.gender,
        'sedentary'
      )
    ).toBe('2245');
  });
});
