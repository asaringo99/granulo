pub struct Position {
    x: i32,
    y: i32,
}

impl Position {
    pub fn new(p_x: i32, p_y: i32) -> Self {
        Position {
            x: p_x,
            y: p_y,
        }
    }

    pub fn get(&self) -> (i32, i32) {
        (self.x, self.y)
    }

    pub fn set(&mut self, p_x: i32, p_y: i32) {
        self.x = p_x;
        self.y = p_y;
    }
}