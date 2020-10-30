import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


fdescribe('Incrementador Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ IncrementadorComponent ],
      imports: [ FormsModule ]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Debe crear el Incrementador Component', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges(); // Lanza la detección de cambios

    const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;

    expect(elem.innerHTML).toContain('Progreso de carga');
  });

  it('Debe mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges(); // Lanza la detección de cambios

    fixture.whenStable().then(() => {
      const elem = fixture.debugElement.query( By.css('input')).nativeElement;
      expect(elem.value).toBe('55');
    });
  });

  it('Debe incrementar/decrementar en 5, con un click en el botón', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);

  });

  it('Hacer clic en los botones DEBE incrementar en 5, el valor bindeado en progreso', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    const elem = fixture.debugElement.query( By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('55');

  });

  it('Hacer clic en los botones DEBE incrementar en 5, el valor bindeado en progreso', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    const elem = fixture.debugElement.query( By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('45');

  });

});
