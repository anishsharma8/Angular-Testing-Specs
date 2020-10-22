import { InsertSpacePipe } from './insert-space.pipe';

describe('InsertSpacePipe', () => {
  
  const pipe = new InsertSpacePipe();

  it('transforms "AnishSharma" to " Anish Sharma"', () => {
    expect(pipe.transform('AnishSharma')).toBe(' Anish Sharma');
  });

  it('transforms "AnishSharma def" to " Anish Sharma Def"', () => {
    expect(pipe.transform('AnishSharmaDef')).toBe(' Anish Sharma Def');
  });

  it('leaves "AnishSharma Def" unchanged', () => {
    expect(pipe.transform('AnishSharma Def')).toBe(' Anish Sharma  Def');
  });

  it('transforms "anish-def" to "anish-def"', () => {
    expect(pipe.transform('anish-def')).toBe('anish-def');
  });

  it('transforms "   anish   def" to "   anish   def" (preserves spaces) ', () => {
    expect(pipe.transform('   anish   def')).toBe('   anish   def');
  });
});