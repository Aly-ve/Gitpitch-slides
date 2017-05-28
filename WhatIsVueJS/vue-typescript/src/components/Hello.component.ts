import { Vue, Component } from 'vue-property-decorator';

@Component({
  template: require('./Hello.component.html'),
})
export default class HelloComponent extends Vue {
  public msg: String = 'Adneom';
  public score: number = 0;

  public increment(): void {
    this.score++;
  }

  public decrement(): void {
    if (this.score > 0) {
      this.score--;
    }
  }
}
