import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  
  const pipe = new TitleCasePipe();

  it('transforms "anish" to "Anish"', () => {
    expect(pipe.transform('anish')).toBe('Anish');
  });

  it('transforms "anish def" to "Anish Def"', () => {
    expect(pipe.transform('anish def')).toBe('Anish Def');
  });

  it('leaves "Anish Def" unchanged', () => {
    expect(pipe.transform('Anish Def')).toBe('Anish Def');
  });

  it('transforms "anish-def" to "Anish-def"', () => {
    expect(pipe.transform('anish-def')).toBe('Anish-def');
  });

  it('transforms "   anish   def" to "   Anish   Def" (preserves spaces) ', () => {
    expect(pipe.transform('   anish   def')).toBe('   Anish   Def');
  });
});