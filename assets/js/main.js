$(function() {
  var header = $(".nav-link");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 400) {
          header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
  });
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
});

(function registerWebMcpTools() {
  var tools = [
    {
      name: "get_clipperz_shop_details",
      title: "Get Clipperz shop details",
      description: "Get the public phone number, location, hours, and walk-in policy for Clipperz of Asheville.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false
      },
      annotations: {
        readOnlyHint: true
      },
      execute: async function() {
        return {
          name: "Clipperz of Asheville",
          description: "Woman-owned barbershop serving men, women, and children. Walk-ins are welcome.",
          phone: "+1-828-484-7220",
          address: "133 Weaverville Road, Suite 4, Asheville, NC 28804",
          hours: {
            monday_through_friday: "9:00 AM–4:30 PM (9:00 AM–4:00 PM during daylight saving time)",
            saturday: "9:00 AM–2:00 PM",
            sunday: "Closed"
          }
        };
      }
    },
    {
      name: "get_nick_booking_link",
      title: "Get Nick's booking link",
      description: "Get the official online appointment link for barber Nick Vargas.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false
      },
      annotations: {
        readOnlyHint: true
      },
      execute: async function() {
        return {
          barber: "Nick Vargas",
          booking_url: "https://app.thecut.co/barbers/68b85fc4195c3ac893830141"
        };
      }
    }
  ];

  if (document.modelContext && document.modelContext.registerTool) {
    tools.forEach(function(tool) {
      document.modelContext.registerTool(tool).catch(function(error) {
        console.warn("Unable to register WebMCP tool " + tool.name, error);
      });
    });
    return;
  }

  // Compatibility with the early WebMCP preview API.
  if (navigator.modelContext && navigator.modelContext.provideContext) {
    navigator.modelContext.provideContext({ tools: tools });
  }
})();

