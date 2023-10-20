ngonchanges fica escutando as mudanças em um elemento, pode emitir um evento pro pai que pode trocar o dado de outro input pro filho (é chamado antes do onInit)

ngOnInit - só é rodado uma única vez

ngDoCheck - chamado logo apos o oninit mas tem filhos ngaftercontentinit, ngaftercontentchecked, ngafterviewinit, ngafterviewchecked

ngOnDestroy pra quando o componente é destruído, caso queira fazer alguma função
