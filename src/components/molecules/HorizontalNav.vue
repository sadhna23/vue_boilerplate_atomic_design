
<script>
export default {
  name: "HorizontalNav",
  props: {
    links: Array
  },
  render: function(createElement) {
    if (this.links.length) {
      console.log("links " + JSON.stringify(this.links));
      return createElement(
        "ul",
        this.links.map(function(links) {
          createElement("li", links.label);
        })
      );
    } else {
      return false;
    }
  }
};
</script>
