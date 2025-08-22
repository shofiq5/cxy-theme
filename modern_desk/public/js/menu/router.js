frappe.router.render = function () {
    if (this.current_route[0]) {
        this.render_page();
    } else {
        // Show our menu page only if enabled
        if (window.MODERN_DESK_MENU_ENABLED !== false) {
            // ...existing code...
            // All menu logic goes here
            frappe.set_route(['app', 'modern-menu']);
        }
    }
}