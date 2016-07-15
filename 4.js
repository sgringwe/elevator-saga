{
  // properties
  // floor
  //  floorNum
  //
  // elevator
  //  destinationQueue

    init: function(elevators, floors) {
        for (i = 0; i < elevators.length; ++i) {
            var elevator = elevators[i]; // Let's use the first elevator

            // Whenever the elevator is idle (has no more queued destinations)
            // reset back to floor 0
            elevator.on("idle", function() {
                elevator.goToFloor(0);
            });

            elevator.on("floor_button_pressed", function(floorNum) {
                console.log("floor_button_pressed", floorNum);
                elevator.goToFloor(floorNum);
            } );
        }

        // currentElevator = 0

        for (i = 0; i < floors.length; ++i) {
          var floor = floors[i];

          floor.on("up_button_pressed ", function() {
              elevators[0].goToFloor(floor.floorNum());
          } );

          floor.on("down_button_pressed ", function() {
              elevators[1].goToFloor(floor.floorNum());
          } );
        }
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}
