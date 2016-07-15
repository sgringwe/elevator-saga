{
    init: function(elevators, floors) {
        for (i = 0; i < elevators.length; ++i) {
            var elevator = elevators[i]; // Let's use the first elevator

            // Whenever the elevator is idle (has no more queued destinations)
            // reset back to floor 0
            elevator.on("idle", function() {
                elevator.goToFloor(0);
            });

            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.goToFloor(floorNum);
            } );

            elevator.on("up_button_pressed ", function(floorNum) {
                elevator.goToFloor(0);
            } );
        }
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}
