describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "NOP nop #%&" para "ABC abc #%&" con offest 65', ()=>{
      assert.equal(cipher.encode(-5,"ABC DEF abc def #%&"),"VWXYZAvwxyza !");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABC abc #%&" para "NOP nop #%&" con offest 65', ()=>{
      assert.equal(cipher.decode(-5,"VWXYZAvwxyza !"),"ABC DEF abc def #%&");
    });

  });
});
