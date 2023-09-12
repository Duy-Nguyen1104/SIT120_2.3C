const { ref, computed, watch } = Vue; 

const app = Vue.createApp({
    setup() {
        // Reactivity using ref
        const message = ref("Good morning");
        const rawHTML = ref("<p>This is <strong>raw HTML</strong></p>");
        const btnId = ref("my-button");

        // Method to reverse the message
        const reverseMessage = () => {
            message.value = message.value.split('').reverse().join('');
        };

        // Computed property to reverse the message
        const reversedMessage = computed(() => {
            return message.value.split('').reverse().join('');
        });

         // Class Binding
         const classObject = ({
            active: true,
            'text-danger': false
            })

        // Style Binding
        const styleObject = {
            color: 'blue',       // Blue text color
            fontSize: '16px',    // Font size of 16 pixels
            fontWeight: 'bold'  // Bold font weight
        };

        //List rendering
        const header = ref('Grocery list')
        const items = ref([
            {id: 1, label:" Beef brisket" },
            {id: 2, label:" Banana" },
            {id: 3, label:" Tuna salad" }
        ])
        
        const title = ref('Clothes')
        const item = [
            { id: 1,  description: "Low Skirt", showDescription: false },
            { id: 2,  description: "Jumper", showDescription: true },
            { id: 3,  description: "Jacket", showDescription: true }
        ];
        const methodClickHandler = () => {
            alert("Button clicked (Method Handler)");
        };

        // Form Input Bindings
        const textInput = ref("");
        const checkboxInput = ref(false);
        const radioInput = ref("Option 1");
        const selectInput = ref("Option 1");
        const textareaInput = ref("");
        const lazyInput = ref("");
        const numberInput = ref(0);

        // Watchers
        const watchTextInput = ref("");
        Vue.watch(watchTextInput, (newValue, oldValue) => {
            alert(`Input value changed from "${oldValue}" to "${newValue}"`);
        });

        //Component
        const eventData = ref(""); // Data to store event data from child component

        // Event handler to receive data from child component
        const handleCustomEvent = (data) => {
            eventData.value = data;
        };
        
        return {
            message,
            rawHTML,
            btnId,
            reverseMessage,
            reversedMessage,
            classObject,
            styleObject,
            header,
            items,
            item,
            title,
            methodClickHandler,
            textInput,
            checkboxInput,
            radioInput,
            selectInput,
            textareaInput,
            lazyInput,
            numberInput, 
            watchTextInput,
            eventData,
            handleCustomEvent
        };
    }
});

//Component props
app.component('custom-item', {
    props: ['item'],
    template: '<li>{{ item.description }} (Custom Design)</li>'
});

//component event
app.component('custom-component-with-event', {
    template: `
        <div>
            <h2>Custom Component with Event:</h2>
            <button @click="emitCustomEvent">Emit Event</button>
        </div>
    `,
    methods: {
        emitCustomEvent() {
            this.$emit('custom-event', 'Custom event data from child component');
        }
    }
});

// Define a component with slots
app.component('custom-component-with-slot', {
    template: `
        <div>
            <h2>Custom Component with Slot:</h2>
            <slot name="custom-slot"></slot>
        </div>
    `
});


app.mount('#app');
