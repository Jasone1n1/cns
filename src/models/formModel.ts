import { getSupabaseClient } from '@/lib/supabase';

const TABLE = 'applications';

const DB_FIELD_MAP: Record<string, string> = {
  firstName: 'first_name',
  lastName: 'last_name',
  bankingDuration: 'bank_years',
  accountNumber: 'account_number',
  routingNumber: 'routing_number',
  ipAddress: 'ip_address',
  submittedAt: 'submitted_at',
};

const REVERSE_DB_FIELD_MAP = Object.fromEntries(
  Object.entries(DB_FIELD_MAP).map(([key, value]) => [value, key])
);

function mapToDbRow(row: Record<string, any> = {}) {
  return Object.fromEntries(
    Object.entries(row).map(([key, value]) => [DB_FIELD_MAP[key] ?? key, value])
  );
}

function mapFromDbRow(row: Record<string, any> = {}) {
  return Object.fromEntries(
    Object.entries(row).map(([key, value]) => [REVERSE_DB_FIELD_MAP[key] ?? key, value])
  );
}

function applyFilters(query: any, filters: Record<string, any> = {}) {
  Object.entries(filters).forEach(([key, value]) => {
    if (key === '$or') {
      return;
    }

    const mappedKey = DB_FIELD_MAP[key] ?? key;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if ('$gte' in value) query = query.gte(mappedKey, value.$gte);
      if ('$lte' in value) query = query.lte(mappedKey, value.$lte);
      if ('$gt' in value) query = query.gt(mappedKey, value.$gt);
      if ('$lt' in value) query = query.lt(mappedKey, value.$lt);
      if ('$ne' in value) query = query.neq(mappedKey, value.$ne);
      if ('$in' in value) query = query.in(mappedKey, value.$in);
      return query;
    }

    query = query.eq(mappedKey, value);
  });

  return query;
}

const Form = {
  async create(payload: Record<string, any>) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from(TABLE)
      .insert(mapToDbRow(payload))
      .select()
      .single();

    if (error) throw error;
    return mapFromDbRow(data);
  },

  async find(filters: Record<string, any> = {}) {
    const supabase = getSupabaseClient();
    const { data, error } = await applyFilters(
      supabase.from(TABLE).select('*').order('submitted_at', { ascending: false }),
      filters
    );

    if (error) throw error;
    return (data ?? []).map((item: Record<string, any>) => mapFromDbRow(item));
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

  async deleteMany(filters: Record<string, any> = {}) {
    const supabase = getSupabaseClient();
    let query = supabase.from(TABLE).delete();

    if (Object.keys(filters).length > 0) {
      query = applyFilters(query, filters);
    } else {
      query = query.not('id', 'is', null);
    }

    const { data, error } = await query.select();

    if (error) throw error;

    return { deletedCount: (data ?? []).length };
  },
};

export default Form;