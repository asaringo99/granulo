pub struct Velocity {
    x: i32,
    y: i32,
}

impl Velocity {
    pub fn new(v_x: i32, v_y: i32) -> Self {
        Velocity {
            x: v_x,
            y: v_y,
        }
    }

    pub fn get(&self) -> (i32, i32) {
        (self.x, self.y)
    }

    pub fn set(&mut self, v_x: i32, v_y: i32) {
        self.x = v_x;
        self.y = v_y;
    }
}