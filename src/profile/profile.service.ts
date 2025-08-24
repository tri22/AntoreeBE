import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { profileList } from './data';
import { LevelMap } from './entities/profile.entity';
import { userList } from 'src/user/data';

@Injectable()
export class ProfileService {
  create(createProfileDto: CreateProfileDto) {
    const nextId = profileList.length + 1;
    const profile = {
      id: nextId,
      ...createProfileDto
    };
    profileList.push(profile);
    return profile;
  }

  findAll() {
    return profileList.map(profile => ({
      ...profile,
      levels: profile.levels.map(level => ({
        name: level,
        logo: LevelMap[level] || null
      }))
    }));
  }



  // Lấy danh sách level kèm logo
  findOne(id: number) {
    const profile = profileList.find(profile => profile.id === id);
    if (!profile) return null;

    return {
      ...profile,
      levels: profile.levels.map(level => ({
        name: level,
        logo: LevelMap[level] || null
      }))
    };
  }


  update(id: number, updateProfileDto: UpdateProfileDto) {
    const profile = profileList.find(profile => profile.id === id);
    if (profile) {
      Object.assign(profile, updateProfileDto);
    }
    return profile;
  }

  remove(id: number) {
    const idx = profileList.findLastIndex(profile => profile.id === id);
    if (idx !== -1) {
      profileList.splice(idx, 1);
    }
    return `Delete successfully!`;
  }
}
