use super::{position::Position, velocity::Velocity};

pub struct Particle {
    pos: Position,
    v: Velocity,
}

impl Particle {
    pub fn new(pos: Position, v: Velocity) -> Self {
        Particle {
            pos,
            v
        }
    }
}

impl Particle {
    pub fn next(&mut self, dt: i32) {
        let (vx, vy) = self.v.get();
        let (px, py) = self.pos.get();
        self.pos.set(px * vx * dt, py * vy * dt);
    }
}