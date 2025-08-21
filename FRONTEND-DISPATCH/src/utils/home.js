const VEHICLE_SIZE = 8;
const PERSON_COLOR = "#5b5b5b";
// const STREET_LINE_COLOR = "#d6d6d6";
const STREET_LINE_COLOR = getComputedStyle(document.documentElement)
  .getPropertyValue("--street-line-color")
  .trim();

class ParticlesPerson {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.originalX = x;
    this.originalY = y;
    this.radius = Math.random() * 5 + 2;
    this.speed = 0.15;
    this.range = 30;
    this.vx = Math.random() * this.speed * 2 - this.speed;
    this.vy = Math.random() * this.speed * 2 - this.speed;
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  float() {
    this.x += this.vx;
    this.y += this.vy;

    const dx = this.x - this.originalX;
    const dy = this.y - this.originalY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance >= this.range) {
      if (Math.abs(dx) > Math.abs(dy)) {
        this.vx = -this.vx;
      } else {
        this.vy = -this.vy;
      }
    }
  }
}

class ParticleVehicle {
  constructor(path, speed, color) {
    this.path = path;
    this.speed = speed;
    this.color = color;
    this.progress = Math.random();
    this.radius = VEHICLE_SIZE;
    this.x = 0;
    this.y = 0;
    this.updatePosition();
  }

  updatePosition() {
    if (this.path.type === "straight") {
      this.updateStraightPosition();
    } else if (this.path.type === "circular") {
      this.updateCircularPosition();
    }
  }

  updateStraightPosition() {
    const { start, end } = this.path.points;
    this.x = start.x + (end.x - start.x) * this.progress;
    this.y = start.y + (end.y - start.y) * this.progress;
  }

  updateCircularPosition() {
    const { centerX, centerY, radius } = this.path.points;
    const angle = this.progress * Math.PI * 2;
    this.x = centerX + Math.cos(angle) * radius;
    this.y = centerY + Math.sin(angle) * radius;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.progress += this.speed;
    if (this.progress >= 1) {
      this.progress = 0;
    }
    this.updatePosition();
  }
}

class StreetLines {
  static drawCircle(radius, positionX, positionY, ctx, lineColor) {
    ctx.beginPath();
    ctx.arc(positionX, positionY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = lineColor;
    ctx.stroke();
    ctx.closePath();
  }
  static drawStraightLine(startX, startY, endX, endY, ctx) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = STREET_LINE_COLOR;
    ctx.stroke();
    ctx.closePath();
  }
}

export { ParticlesPerson, ParticleVehicle, StreetLines };
