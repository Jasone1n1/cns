import { NextResponse } from 'next/server';
import Application from '@/models/formModel';

export async function DELETE() {
  try {
    const result = await Application.deleteMany({});

    return NextResponse.json(
      {
        message: 'All applications deleted successfully',
        deletedCount: result.deletedCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting applications:', error);
    return NextResponse.json(
      { error: 'Failed to delete applications' },
      { status: 500 }
    );
  }
}
