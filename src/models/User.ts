import { getSupabaseClient } from '@/lib/supabase';

const TABLE = 'users';

function applyFilters(query: any, filters: Record<string, any> = {}) {
  const { $or, ...rest } = filters;

  if ($or && Array.isArray($or) && $or.length > 0) {
    const clauses = $or
      .map((filter) => {
        const [field, value] = Object.entries(filter)[0] ?? [];
        return field && value !== undefined ? `${field}.eq.${String(value)}` : null;
      })
      .filter(Boolean)
      .join(',');

    if (clauses) {
      query = query.or(clauses);
    }
  }

  Object.entries(rest).forEach(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if ('$gte' in value) query = query.gte(key, value.$gte);
      if ('$lte' in value) query = query.lte(key, value.$lte);
      if ('$gt' in value) query = query.gt(key, value.$gt);
      if ('$lt' in value) query = query.lt(key, value.$lt);
      if ('$ne' in value) query = query.neq(key, value.$ne);
      if ('$in' in value) query = query.in(key, value.$in);
      return;
    }

    query = query.eq(key, value);
  });

  return query;
}

const User = {
  async findOne(filters: Record<string, any> = {}) {
    const supabase = getSupabaseClient();
    const { data, error } = await applyFilters(
      supabase.from(TABLE).select('*'),
      filters
    ).maybeSingle();

    if (error) throw error;
    return data ?? null;
  },

  async findById(id: string) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.from(TABLE).select('*').eq('id', id).maybeSingle();

    if (error) throw error;
    return data ?? null;
  },

  async countDocuments(filters: Record<string, any> = {}) {
    const supabase = getSupabaseClient();
    const { count, error } = await applyFilters(
      supabase.from(TABLE).select('*', { count: 'exact', head: true }),
      filters
    );

    if (error) throw error;
    return count ?? 0;
  },

  async create(payload: Record<string, any>) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.from(TABLE).insert(payload).select().single();

    if (error) throw error;
    return data;
  },
};

export default User;
