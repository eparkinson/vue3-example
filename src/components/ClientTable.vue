<template>
 <table class="uk-table uk-table-small uk-table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Domain</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="c in clients" :key="c.name">
            <td>{{ c.name }}</td>
            <td>{{ c.domain }}</td>
        </tr>
    </tbody>
</table>

</template>

<script setup>
    import { ref, inject } from 'vue'
    
    const api = inject("api") ;
    const eventbus = inject("eventbus") ;
    const clients = ref(api.clients);

    eventbus.on('client-add', () => clients.value = api.clients );

</script>
