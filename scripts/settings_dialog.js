const settings_dialog = document.getElementById('settings-dialog');
const settings_button = document.getElementById('settings-button');
const close_settings_button = document.getElementById('close-settings-button');

function close_settings() {
    settings_dialog.close();
}

settings_button.addEventListener('click', () => {
    settings_dialog.showModal();
})