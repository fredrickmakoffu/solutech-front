<template>
    <div class="container border-0 bg-white breadcrumbs">
        <div class="row">
            <nav class="col-12 pt-3 pb-3 position-relative d-flex" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                
                <ol class="breadcrumb mb-0 me-4 mt-1 ms-auto">
                    <li v-for="({title, active, link, index}) in breadcrumbs_data" :key="index" :class="['breadcrumb-item', {'active': active == true}]" aria-current="page">
                        <router-link v-if="!active" :to="'/' + link">{{ title }}</router-link>
                        <span v-if="active">{{ title }}</span>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AutoBreadcrumbs',
        props: {
            breadcrumbs_data: {
                required: true,
                type: Array
            }
        },
    }
</script>