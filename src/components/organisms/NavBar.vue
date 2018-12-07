
<script>
import TextField from '../atoms/test'
import AppLogo from '../atoms/AppLogo'
import HorizontalNav from '../molecules/HorizontalNav'

export default {
  name: 'NavBar',
  render (createElement) {
         return <div>  <TextField /> <HorizontalNav links={this.links} /> </div>
     },
  data () {
    return {
      links: [
        {
          path: '/',
          label: 'Index'
        },
        {
          path: '/about',
          label: 'About'
        },
        {
          path: '/test',
          label: 'Test'
        },
        {
          path: '/organisms',
          label: 'Organisms'
        }
      ]
    }
  },
}
</script>