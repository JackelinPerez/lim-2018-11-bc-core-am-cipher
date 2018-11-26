describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "NOP nop #%&" para "ABC abc #%&" con offest 65', ()=>{
      assert.equal(cipher.encode("ABC abc #%&",65),"NOP nop #%&");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABC abc #%&" para "NOP nop #%&" con offest 65', ()=>{
      assert.equal(cipher.decode("NOP nop #%&",65),"ABC abc #%&");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });

});
