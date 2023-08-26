interface ICopiadora {
  copiar():void
}

interface IScanner {
  escanear():void
}
interface IImpressora {
  imprimir():void
}

class ImpressoraSimples implements IImpressora {
  imprimir():void {
    throw new Error("Method not implemented")
  }
}

class ImpressoraPro implements ICopiadora, IScanner, IImpressora {
  copiar(): void {

  }
  escanear(): void {

  }
  imprimir(): void {

  }
}

