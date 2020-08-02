import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bcrypt from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

export default User;
