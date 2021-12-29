
<template>
    <a
        class="uk-button uk-button-default uk-align-right test"
        href="#modal-add-form"
        uk-toggle
    >New Client</a>

    <div id="modal-add-form" uk-modal>
        <div class="uk-modal-dialog">
            <div class="uk-modal-header">
                <h2 class="uk-modal-title">Add New Client</h2>
            </div>
            <form id="#add-form" class="uk-form-stacked" @submit.prevent="handleSubmit" novalidate>
                <div class="uk-modal-body">
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-client-name">Client Name</label>
                        <div class="uk-form-controls">
                            <input
                                name="name"
                                v-model="form.name"
                                class="uk-input"
                                :class="{'uk-form-danger': v$.name.$invalid}"
                                id="form-client-name"
                                type="text"
                                required
                            />
                            <span class="uk-text-danger uk-text-small" v-for="e in v$.name.$errors" :key="e.$uid">{{ e.$message }}</span>
                        </div>
                        
                        
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-client-domain">Client Domain</label>
                        <div class="uk-form-controls">
                            <input
                                name="domain"
                                v-model="form.domain"
                                class="uk-input"
                                :class="{'uk-form-danger': v$.domain.$invalid}"
                                id="form-client-domain"
                                type="text"
                                required
                            />
                            <span class="uk-text-danger uk-text-small" v-for="e in v$.domain.$errors" :key="e.$uid">{{ e.$message }}</span>
                        </div>
                    </div>
                </div>

                <div class="uk-modal-footer uk-text-right">
                    <button @click="reset" class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    <button class="uk-button uk-button-primary" type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script setup>
import { inject, reactive } from 'vue'
import UIkit from 'uikit';
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const eventbus = inject("eventbus"); 
const api = inject("api");

const form = reactive({
    name: "",
    domain: ""
})

const rules = {
    name: { required },
    domain: { required }
}

const v$ = useVuelidate(rules, form, { $lazy: true }) ;

function handleSubmit() {    
    v$.value.$touch() ;
    if (!v$.value.$invalid) {
        api.addClient(form.name, form.domain)
        eventbus.emit("client-add")
        UIkit.modal("#modal-add-form").hide();
        reset();
    }
}

function reset() {
    form.name ="";
    form.domain = "";
    v$.value.$reset();
}


</script>