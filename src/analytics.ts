import * as $ from'jquery';
function createAnalytics(): object {
    let counter = 0
    let isDsetroyes: boolean = false

    const listener = (): number => counter++

    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
            isDsetroyes = true
        },

        getClicks() {
            if (isDsetroyes) {
                return 'Analytics is destroyed'
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics();