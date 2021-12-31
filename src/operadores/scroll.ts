import {fromEvent} from 'rxjs'
import {map,tap } from 'rxjs/operators';

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non varius tellus. Phasellus dapibus, ante vel efficitur ornare, diam nulla pretium eros, sit amet suscipit arcu tortor hendrerit lorem. Integer id justo elementum, tempor est quis, sodales diam. Integer vel dui turpis. Phasellus volutpat lorem id leo finibus laoreet. Nullam id dictum mauris. Sed bibendum, mauris sed accumsan imperdiet, felis eros auctor mauris, vel ornare elit dui ac urna. Sed porttitor commodo velit sit amet dignissim. Sed sem risus, dictum vel porta fringilla, feugiat vitae risus. Aliquam orci felis, posuere eget dapibus nec, egestas vel felis. Curabitur lobortis consequat elit vitae eleifend. Morbi at blandit mi, id elementum lacus. Nunc a condimentum odio, non luctus urna. Mauris quis cursus nunc. Pellentesque non imperdiet libero.

Aliquam sit amet sapien nibh. Morbi eu ante in felis pulvinar porttitor id sit amet diam. Nullam ac placerat arcu. Vestibulum augue augue, varius in bibendum eget, suscipit et nisl. Maecenas auctor finibus massa eu hendrerit. Maecenas laoreet ipsum nec turpis euismod, eu molestie mi scelerisque. Duis interdum sapien non orci ullamcorper, id hendrerit odio porta. Proin convallis rutrum sem et molestie. Integer id cursus metus, non porta nunc. Donec sit amet elit volutpat, sollicitudin elit vel, cursus lacus. Quisque in sem aliquet, pellentesque elit ut, pharetra neque. Sed tristique at diam sit amet aliquet.

Phasellus ut tempus diam, eget tincidunt nibh. Morbi eget eros diam. Sed pulvinar purus neque. Phasellus dolor lectus, elementum id lobortis sit amet, ultrices quis mi. Quisque dolor tellus, mollis id est vel, molestie eleifend leo. Aenean ut augue neque. Sed dictum dui arcu, quis dictum quam auctor ut. Aenean condimentum vel massa sed blandit. Vestibulum vel dictum nunc. Vestibulum a est non augue molestie sodales eu at massa. Mauris eget metus justo. Sed feugiat vestibulum felis et feugiat.

Praesent dignissim bibendum vestibulum. Nam sit amet ligula id lorem venenatis hendrerit. Quisque diam elit, vulputate sed nunc sed, porta accumsan sem. Maecenas eget diam sollicitudin, accumsan ex id, hendrerit ante. Fusce quam nulla, rutrum nec risus in, vulputate tempor quam. Fusce libero risus, sagittis ac vestibulum ac, auctor vel tortor. Suspendisse tortor nisl, sodales id sagittis iaculis, sagittis quis sapien. Morbi pharetra nulla nec malesuada finibus. Fusce egestas nibh eget lorem ullamcorper viverra. Sed id turpis felis. Nulla id convallis mauris, at ornare elit. Duis non justo diam. Curabitur arcu nisl, ultrices eget rutrum suscipit, sollicitudin quis metus. Aliquam ornare lorem a tortor rhoncus accumsan. Mauris eleifend nibh at dictum laoreet.

Nulla consectetur velit orci, egestas pulvinar est vestibulum non. Maecenas a nibh efficitur, bibendum metus eu, ullamcorper nibh. In hac habitasse platea dictumst. Proin at libero efficitur, placerat purus molestie, porttitor magna. Vestibulum neque dui, bibendum at lectus non, dignissim scelerisque est. Ut tincidunt luctus purus, nec ornare libero volutpat eget. Vivamus sed quam lacinia, consequat nunc et, mattis dui.

Interdum et malesuada fames ac ante ipsum primis in faucibus. In vel turpis urna. Pellentesque pellentesque nulla finibus justo elementum, eu venenatis lacus maximus. Nulla vestibulum elit dolor, at pulvinar elit placerat eu. Donec suscipit varius aliquam. Mauris aliquam eros eu semper consectetur. Vestibulum massa turpis, vulputate vitae ultrices vitae, posuere sit amet magna.

Suspendisse urna sem, pulvinar et maximus at, fermentum ac ligula. Curabitur eget ante lacinia, volutpat nibh vel, consectetur mi. In non ipsum sed ipsum sollicitudin dictum a sit amet orci. Aliquam id pulvinar nulla. Nulla viverra turpis non lectus egestas, eget semper ligula pellentesque. Donec et facilisis ante, a mollis odio. Curabitur scelerisque in mi id ultrices. Proin eu dolor id mi pharetra rhoncus nec ac lorem. Nunc dictum pulvinar ligula, sit amet dignissim mi aliquet eget. Morbi blandit risus sed egestas condimentum. Nulla non sapien congue, scelerisque nulla quis, iaculis nulla. Cras nulla elit, aliquam eget diam ac, mattis tincidunt quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Aliquam sagittis pretium porttitor. Suspendisse metus purus, vestibulum vitae elementum sed, eleifend vitae est. Maecenas viverra arcu est, vitae consectetur neque euismod et. Nullam dapibus pellentesque nibh, ac tristique sem interdum id. Vivamus quis leo ullamcorper, condimentum lectus vel, varius orci. In elit elit, venenatis non porta eget, vehicula in enim. Duis sit amet accumsan ex. Sed non massa risus. Integer nisi leo, mollis eu neque in, dignissim hendrerit est. Morbi magna mi, luctus at vehicula non, condimentum eu dolor.

Sed sagittis lorem vitae nunc ornare, a euismod lorem viverra. Phasellus euismod enim felis, eget semper neque maximus eu. Vestibulum ornare, eros interdum pretium ullamcorper, eros purus suscipit massa, et tincidunt eros purus ut dui. In bibendum vel lorem et dapibus. Vivamus ipsum magna, tincidunt et diam vitae, tincidunt efficitur erat. Suspendisse nec aliquam metus. Vestibulum dapibus iaculis sem vel fringilla. Praesent a suscipit massa. Morbi vel tristique felis, vitae consectetur neque. Duis sit amet mollis dui, a tincidunt quam. Phasellus ullamcorper mauris sed erat tincidunt, vel convallis arcu pellentesque. Praesent convallis libero vehicula tellus consequat vulputate. Morbi sed est pharetra, viverra nulla in, blandit tellus. Nam varius libero sapien, ac tempus mi molestie eu.

Nullam dignissim nisi leo, imperdiet vestibulum enim congue ut. Praesent id pharetra nibh. Integer id augue at urna sollicitudin pharetra in sed magna. Suspendisse volutpat, augue ut condimentum laoreet, dolor massa congue sem, non pretium libero orci nec magna. Sed non lacinia odio. Ut interdum mollis elementum. Pellentesque id lacus congue, pulvinar neque volutpat, convallis urna. Phasellus justo neque, mattis at diam eget, semper fermentum nibh. Quisque mollis maximus auctor. Praesent et posuere nibh. Integer elit turpis, rutrum in velit lacinia, mattis laoreet tortor. Donec quis diam ex. Curabitur non elit odio. In luctus sed mauris a iaculis. Cras tempor eu mauris nec placerat.`

const body: HTMLBodyElement = document.querySelector('body');
body.append(text);

const progressBar: HTMLDivElement = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

const scroll$ = fromEvent<Event>(document,'scroll');

const calcularPorcentaje = (event)=>{
    const {scrollTop,scrollHeight,clientHeight} = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const progres$ = scroll$.pipe(
    map(x=>calcularPorcentaje(x)),
    tap(console.log)
);

progres$.subscribe(porcentaje =>{
    progressBar.style.width = `${porcentaje}%`;
})