<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category')->insert([
            [
                'name' => 'Design',
                'slug' => 'design',
            ],
            [
                'name' => 'Program',
                'slug' => 'program',
            ],
            [
                'name' => 'Marketing',
                'slug' => 'marketing',
            ],
        ]);
    }
}
