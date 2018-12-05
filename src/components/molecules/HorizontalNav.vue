<template>
    <nav class="trial-container-fluid navbar-container">
        <div class="navbar-container__content">
            <ul>
                <li v-for="link in links" :key="link.label">
                   
                    <AppLink
                        :label="link.label"
                        :path="link.path"
                    />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import AppLogo from '../atoms/AppLogo.vue'
import AppLink from '../atoms/AppLink.vue'
export default {
    name: "HorizontalNav",
    props:{
        links: Array
    },
    components:{
        AppLogo,
        AppLink
    }
}
</script>

