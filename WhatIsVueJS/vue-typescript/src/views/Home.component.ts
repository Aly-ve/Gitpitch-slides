import { Component, Vue } from "vue-property-decorator";
import Hello from "../components/Hello.component";

@Component({
  template: require('./Home.component.html'),
  components: {
    Hello
  }
})
export default class Home extends Vue {}