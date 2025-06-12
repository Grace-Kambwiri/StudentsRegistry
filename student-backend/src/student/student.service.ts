import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  // Create a new student
  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  // Get all students
  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  // Get one student by ID
async findOne(id: number): Promise<Student | null> {
  return await this.studentRepository.findOne({ where: { id } });
  }


  // Update student info
async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
  const existing = await this.findOne(id);
  if (!existing) {
    throw new NotFoundException(`Student with ID ${id} not found`);
  }

  await this.studentRepository.update(id, updateStudentDto);
  return this.findOne(id) as Promise<Student>;
}


  // Delete a student by ID
async remove(id: number): Promise<void> {
  const student = await this.findOne(id);
  if (!student) {
    throw new NotFoundException(`Student with ID ${id} not found`);
  }

  await this.studentRepository.delete(id);
}
}
