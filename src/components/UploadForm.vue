// a way to massage the message before passing it to the action
// uploadImages($event.target.files) - $event is used as it tells vue to use event from the change method
<template>
    <div class="dropper">
        <input accept="image/*" multiple type="file" @change="uploadImages($event.target.files)" />
        <span>Drag files here!</span>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'UploadForm',
    methods: {
        ...mapActions(['uploadImages'])
    }
}
</script>

<style scoped>

/* vh = view hight  30 percent of the view

input abousltute to fill the whole div so all interaction is against the div

*/
.dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.dropper:hover {
    background-color: #eee
}

input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
}

</style>
